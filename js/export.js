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
        doc.text("Unidade Parque 10: 08h às 22h | Unidade Compensa: 08h às 20h", 14, finalY + 42);
        
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
// 3. Send via WhatsApp
// ==========================================
window.sendToWhatsApp = function() {
    if (!window.animazCart || window.animazCart.length === 0) {
        alert('O carrinho está vazio.');
        return;
    }

    const phone = "5592981870014"; // Number from store info
    let message = `*ANIMAZ PET SHOP* 🐾\n`;
    message += `Novo pedido de orçamento/compra\n`;
    message += `Data: ${getOrderDateString()}\n\n`;
    message += `*Itens do Pedido:*\n`;
    
    let totalVal = 0;
    
    window.animazCart.forEach((item, index) => {
        const isConsulte = item.price <= 0;
        const sub = isConsulte ? 0 : item.price * item.qty;
        totalVal += sub;
        
        const sizeStr = item.size ? ` (Tam: ${item.size})` : '';
        const priceStr = isConsulte ? 'Consulte' : formatPriceExp(sub);
        
        message += `${index + 1}. ${item.qty}x ${item.name}${sizeStr} - ${priceStr}\n`;
    });
    
    message += `\n*TOTAL:* ${totalVal > 0 ? formatPriceExp(totalVal) : 'A Consultar'}\n\n`;
    message += `Aguardando retorno para confirmar a disponibilidade e entrega.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}
