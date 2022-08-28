let albums = {
    1 :{
        albumTitle: "why1?",
        artist: "Why",
        track: ['djuybu', 'djuybu', 'djuybu']
    },
    2: {
        albumTitle: "why2?",
        artist: "Why",
        track: ['djuybu', 'djuybu', 'djuybu'],
    },
    3: { 
        albumTitle: "why3?",
        artist: "Why",
        track: ['djuybu', 'djuybu', 'djuybu'],
    },
}
let num = prompt('Nhập 1 để tạo album mới, 2 để xem, 3 để cập nhật và 4 để xoá')
switch (num) {
    case 1:
        Object.create (1)
        break;
    case 2:  
        function readAlbum(params) {
            read = prompt('Chọn 1 album')
            alert (albums.read)
        }
        break;
    case 3:

        break;
    default:
        break;
}