/**
 * export.js
 * Funcionalidades de Exportação (PDF, Excel, WhatsApp)
 */

// ==========================================
// Helpers
// ==========================================
function getOrderDateString() {
    const now = new Date();
    return now.toLocaleDateString('pt-BR') + ' às ' + now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function getOrderNumber() {
    return 'PED-' + Date.now().toString().slice(-6);
}

function formatPriceExp(value) {
    if (!value || value <= 0) return 'Consulte';
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ==========================================
// 1. Export PDF
// ==========================================
window.exportToPDF = function() {
    if (!window.animazCart || window.animazCart.length === 0) {
        alert('O carrinho está vazio.');
        return;
    }

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        const orderNum = getOrderNumber();
        const dateStr = getOrderDateString();
        
        // --- Header ---
        doc.setFillColor(60, 21, 122); // --color-purple
        doc.rect(0, 0, 210, 40, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.text("ANIMAZ PET SHOP", 14, 20);
        
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.text("Cuidado pet a pet.", 14, 28);
        
        // --- Order Info ---
        doc.setTextColor(50, 50, 50);
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text(`Pedido: ${orderNum}`, 14, 55);
        
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.text(`Data: ${dateStr}`, 14, 62);
        
        // --- Table ---
        const tableColumn = ["#", "Produto", "Tamanho", "Qtd", "Preço Unit.", "Subtotal"];
        const tableRows = [];
        
        let totalVal = 0;
        let hasConsulte = false;
        
        window.animazCart.forEach((item, index) => {
            const isConsulte = item.price <= 0;
            if (isConsulte) hasConsulte = true;
            
            const sub = isConsulte ? 0 : item.price * item.qty;
            totalVal += sub;
            
            const rowData = [
                (index + 1).toString(),
                item.name,
                item.size || '-',
                item.qty.toString(),
                formatPriceExp(item.price),
                isConsulte ? 'Consulte' : formatPriceExp(sub)
            ];
            tableRows.push(rowData);
        });
        
        doc.autoTable({
            startY: 70,
            head: [tableColumn],
            body: tableRows,
            theme: 'striped',
            headStyles: { fillColor: [60, 21, 122] }, // Purple
            alternateRowStyles: { fillColor: [245, 245, 245] },
            styles: { font: "helvetica" },
            columnStyles: {
                0: { cellWidth: 10 },
                2: { cellWidth: 25, halign: 'center' },
                3: { cellWidth: 20, halign: 'center' },
                4: { cellWidth: 35, halign: 'right' },
                5: { cellWidth: 35, halign: 'right' }
            }
        });
        
        const finalY = doc.lastAutoTable.finalY || 70;
        
        // --- Total ---
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        const totalText = `TOTAL: ${totalVal > 0 ? formatPriceExp(totalVal) : 'A Consultar'}`;
        
        // Align right
        const textWidth = doc.getTextWidth(totalText);
        doc.text(totalText, 196 - textWidth, finalY + 15);
        
        // --- Footer ---
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 100, 100);
        
        doc.text("Agradecemos a preferência!", 14, finalY + 30);
        doc.text("WhatsApp: +55 (92) 98187-0014", 14, finalY + 36);
        doc.text("Parque 10: 08h às 22h (Av. Maneca Marques, 1902) | Compensa: 08h às 20h (Av. Brasil, 1713)", 14, finalY + 42);
        doc.text("Ponta Negra: 08h às 22h (Av. Coronel Teixeira, 6525)", 14, finalY + 48);
        
        // Save
        const filename = `Pedido_Animaz_${orderNum}.pdf`;
        doc.save(filename);
        
        if (typeof window.showToast === 'function') {
            window.showToast('PDF gerado com sucesso!');
        }
        
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        alert('Ocorreu um erro ao gerar o PDF. Verifique se a biblioteca jsPDF foi carregada.');
    }
}

// ==========================================
// 2. Export Excel
// ==========================================
window.exportToExcel = function() {
    if (!window.animazCart || window.animazCart.length === 0) {
        alert('O carrinho está vazio.');
        return;
    }

    try {
        const orderNum = getOrderNumber();
        const dateStr = getOrderDateString();
        
        // Prepare Data
        const excelData = [
            ["ANIMAZ PET SHOP - PEDIDO"],
            [`Pedido: ${orderNum}`],
            [`Data: ${dateStr}`],
            [], // Empty row
            ["Produto", "Tamanho", "Qtd", "Preço Unit.", "Subtotal"]
        ];
        
        let totalVal = 0;
        
        window.animazCart.forEach(item => {
            const isConsulte = item.price <= 0;
            const sub = isConsulte ? 0 : item.price * item.qty;
            totalVal += sub;
            
            excelData.push([
                item.name,
                item.size || '-',
                item.qty,
                isConsulte ? 'Consulte' : item.price,
                isConsulte ? 'Consulte' : sub
            ]);
        });
        
        // Add Total row
        excelData.push([]);
        excelData.push(["", "", "", "TOTAL:", totalVal > 0 ? totalVal : 'A Consultar']);
        
        // Create Worksheet
        const ws = XLSX.utils.aoa_to_sheet(excelData);
        
        // Set column widths
        const wscols = [
            {wch: 40}, // Produto
            {wch: 15}, // Tamanho
            {wch: 10}, // Qtd
            {wch: 15}, // Preço Unit
            {wch: 15}  // Subtotal
        ];
        ws['!cols'] = wscols;
        
        // Create Workbook
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Pedido Animaz");
        
        // Save
        XLSX.writeFile(wb, `Pedido_Animaz_${orderNum}.xlsx`);
        
        if (typeof window.showToast === 'function') {
            window.showToast('Planilha Excel gerada com sucesso!');
        }
        
    } catch (error) {
        console.error('Erro ao gerar Excel:', error);
        alert('Ocorreu um erro ao gerar o Excel. Verifique se a biblioteca SheetJS foi carregada.');
    }
}

// ==========================================
// 3. Send via WhatsApp & Checkout Modal Logic
// ==========================================
window.sendToWhatsApp = function() {
    if (!window.animazCart || window.animazCart.length === 0) {
        alert('O carrinho está vazio.');
        return;
    }
    window.openCheckoutModal();
}

window.openCheckoutModal = function() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevents scrolling
    }
}

window.closeCheckoutModal = function() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restores scrolling
    }
}

window.handleCheckoutModalClick = function(event) {
    const card = document.querySelector('.checkout-modal-card');
    if (card && !card.contains(event.target)) {
        window.closeCheckoutModal();
    }
}

window.maskCPF = function(input) {
    let value = input.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    
    input.value = value;
}

window.submitCheckout = function(event) {
    event.preventDefault();
    
    const name = document.getElementById('checkout-name').value.trim();
    const cpf = document.getElementById('checkout-cpf').value.trim();
    const address = document.getElementById('checkout-address').value.trim();
    
    if (!name || !cpf || !address) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    const phone = "5592981870014"; // Store phone
    const orderNum = getOrderNumber();
    const dateStr = getOrderDateString();
    
    // Build detailed structured message for ERP separation/invoicing
    let message = `*ANIMAZ PET SHOP* 🐾\n`;
    message += `*PEDIDO DE COMPRA / FATURAMENTO*\n\n`;
    
    message += `*👤 DADOS DO CLIENTE:*\n`;
    message += `• *Nome:* ${name}\n`;
    message += `• *CPF:* ${cpf}\n`;
    message += `• *Endereço:* ${address}\n\n`;
    
    message += `*📦 ITENS DO PEDIDO:*\n`;
    
    let totalVal = 0;
    window.animazCart.forEach((item, index) => {
        const isConsulte = item.price <= 0;
        const sub = isConsulte ? 0 : item.price * item.qty;
        totalVal += sub;
        
        const sizeStr = item.size ? ` (Tamanho: ${item.size})` : '';
        const priceStr = isConsulte ? 'Consulte' : formatPriceExp(item.price);
        const subtotalStr = isConsulte ? 'Consulte' : formatPriceExp(sub);
        
        message += `• ${item.qty}x ${item.name}${sizeStr}\n`;
        message += `  Valor Unit.: ${priceStr} | Subtotal: ${subtotalStr}\n`;
    });
    
    message += `\n----------------------------------------\n`;
    message += `*💰 TOTAL DO PEDIDO:* ${totalVal > 0 ? formatPriceExp(totalVal) : 'A Consultar'}\n`;
    message += `----------------------------------------\n\n`;
    
    message += `*Informações do Pedido:*\n`;
    message += `• Pedido Nº: ${orderNum}\n`;
    message += `• Data/Hora: ${dateStr}\n\n`;
    message += `_Pedido gerado via catálogo online._`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear Form
    document.getElementById('checkout-form').reset();
    
    // Close Modal and Drawer
    window.closeCheckoutModal();
    if (typeof window.closeCart === 'function') {
        window.closeCart();
    }
    
    // Clear Cart since order was placed
    window.animazCart = [];
    if (typeof saveCart === 'function') {
        saveCart();
    } else if (localStorage) {
        localStorage.setItem('animaz_cart', JSON.stringify([]));
        if (typeof renderCart === 'function') {
            renderCart();
        }
        if (typeof updateCartBadge === 'function') {
            updateCartBadge();
        }
    }
    
    if (typeof showToast === 'function') {
        showToast('Pedido enviado ao WhatsApp com sucesso!');
    }
}

