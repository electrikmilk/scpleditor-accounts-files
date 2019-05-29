**Rename file or folder**
----
Rename a file or folder specified by 'id'. 'name' is the new name of the file or folder. This endpoint is restricted to the owner of the file or folder.

* **URL**

  /rename

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`<br/>
   `id=[alphanumeric]`<br/>
   `name=[string]`

* **Success Response:**

     * **Code:** 200 <br />
       **Content:** `{ "name":"Renamed file.scpl" }`

* **Error Response:**

   * **Code:** 401 UNAUTHORIZED <br />
     **Content:**<br/>
     `{ "status":"error", "message":"No authentication token was received." }`<br/>
     `{ "status":"error", "message":"Invalid authentication token." }`

     OR

    * **Code:** 503 SERVICE_UNAVAILABLE <br />
       **Content:**<br/>
       `{ "status":"error", "message":"There was an internal error renaming file.scpl." }`<br/>
       `{ "status":"error", "message":"There was a database error renaming file.scpl." }`<br/>
       `{ "status":"error", "message":"File|Folder does not appear to exist." }`<br/>
       `{ "status":"error", "message":"You do not appear to own that file|folder" }`<br/>
       `{ "status":"error", "message":"Invalid file|folder ID" }`

* **Sample Call:**

```javascript
       $.ajax({
         url: "https://account.scpl.dev/api/v1/rename",
         dataType: "json",
         type: "POST",
         date: {
            token: "AUTH_TOKEN",
            id: "FILE_ID",
            name: "New Name"
         },
         success : function(r) {
           console.log(r);
         }
       });
```

* **Notes:**

     This endpoint returns the new name of the file because it removes any special characters from the file name for you.
