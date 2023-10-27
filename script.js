
    function downloadCV() {
      const fileName = "MatidaPelembaCV-2023InternHIT.pdf";
      const link = document.createElement("a");
      link.href = fileName;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  