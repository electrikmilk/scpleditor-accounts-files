**Create File or Folder**
----
Creates a physical file or folder in the users folder and a database record for that file or folder.

No need to send 'name' with '.scpl' at the end, this endpoint will add it for you. However if for some reason you need to, this endpoint will allow it and not append an extension if it already exists.

'contents' is optional for files and will be ignored if you are creating a folder.

* **URL**

  /create

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`<br/>
   `type=[file|folder]`<br/>
   `name=[string]`

   **Optional:**

   `contents=[scpl]`

  * **Success Response:**

     * **Code:** 200 OK <br />
       **Content:** `{ "id":"3nc8rjfi49dneuc84ir9", "name":"New File.scpl" }`

   * **Error Response:**

      * **Code:** 401 UNAUTHORIZED <br />
     **Content:**<br/>
     `{ "status":"error", "message":"No authentication token was received." }`<br/>
     `{ "status":"error", "message":"Invalid authentication token." }`

     OR

     * **Code:** 503 SERVICE UNAVAILABLE <br />
       **Content:**<br/>
       `{ "status":"error", "message":"Your account limit has been reached (0.5 GB)." }`<br/>
       `{ "status":"error", "message":"Internal file system error creating file file.scpl." }`<br/>
       `{ "status":"error", "message":"Internal file system error creating folder foldername." }`<br/>
       `{ "status":"error", "message":"Internal database error creating file file.scpl. " }`<br/>
       `{ "status":"error", "message":"File with name file.scpl already exists." }`

   * **Sample Call:**

```javascript
       $.ajax({
         url: "https://account.scpl.dev/api/v1/create",
         dataType: "json",
         type: "POST",
         date: {
            token: "AUTH_TOKEN",
            type: "file",
            name: "New File",
            contents: "ShowResult 'Hello ScPL'"
         },
         success : function(r) {
           console.log(r);
         }
       });
```

   * **Notes:**

     This endpoint returns the new name of the file because it removes any special characters from the file name for you.
