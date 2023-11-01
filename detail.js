let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.container .productname').forEach(productname =>{
    productname.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = productname.getAttribute('.productname');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('.previewname');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});