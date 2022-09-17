var url =""

const addData=()=>{
    var namee = document.getElementById("ful").value
    var fath = document.getElementById("fath").value
    var dist = document.getElementById("dist").value
    // var profile = document.getElementById("prof").value
    firebase.database().ref('Register Data/').push({
        name:namee,
        Fathername:fath,
        Distt:dist,
        url:url
        // profPic:profile,
      });
}

const profPic=()=>{

    let file = document.getElementById("prof").files[0]
    // Create the file metadata
var metadata = {
    contentType: 'image/jpeg'
  };
  var storageRef = firebase.storage().ref();

  // Upload file and metadata to the object 'images/mountains.jpg'
  var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
  
  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      document.getElementById("bar").value=progress
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
  
        // ...
  
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, 
    () => {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
        url = downloadURL
        // firebase.database().ref('Register Data/' ).push({url:downloadURL})
      });
    }
  );
}




