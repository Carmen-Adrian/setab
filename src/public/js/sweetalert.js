//funcjon anadir noticia
function eliminar(id) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: "Esta seguro de eliminar?",
        text: "¡No podrá revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = '/delete/' + id;
            swalWithBootstrapButtons.fire(
                'Eliminado!',
                'La noticia se ha elimnado ',
                'success'
                
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'Su noticia esta a salvo :)',
                'error'
            )
        }
    })
};

function confirmar(id) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'Esta seguro de editar la notica?',
        text: "¡No podrá revertir esto!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: ' Si ',
        cancelButtonText: ' No ',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
          
            swalWithBootstrapButtons.fire(
                'Acepto editarla!',
                'La noticia editar ',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'Su noticia esta a salvo :)',
                'error'
            )
        }
    })
};

//funcion añadir-directorio
function eliminar1(id) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'Esta seguro de eliminar este directorio?',
        text: "¡No podrá revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: ' Si',
        cancelButtonText: ' No',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = '/delete1/' + id;
            swalWithBootstrapButtons.fire(
                'Eliminado!',
                'El directorio se elimino',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'El directorio esta a salvo',
                'error'
            )
        }
    })
};

function confirmar1(id) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'Esta seguro de editar este directorio ?',
        text: "¡No podrá revertir esto!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: ' Si ',
        cancelButtonText: ' No ',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = '/edit-directory/' + id;
            swalWithBootstrapButtons.fire(
                'Acepto editarla!',
                
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'Su directorio esta a salvo :)',
                'error'
            )
        }
    })
};



