**Save file with new contents**
----
Save new contents for a file specified by 'id'. Endpoint is restricted to the owner of the file or a set collaborator.

* **URL**

  /save

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`<br/>
   `id=[alphanumeric]`<br/>
   `contents=[scpl]`

* **Success Response:**

     * **Code:** 200 <br />
       **Content:** `{ "status" : "success", "message":"File file.scpl has been saved." }`

* **Error Response:**

   * **Code:** 401 UNAUTHORIZED <br />
     **Content:**<br/>
     `{ "status":"error", "message":"No authentication token was received." }`<br/>
     `{ "status":"error", "message":"Invalid authentication token." }`

     OR

    * **Code:** 503 SERVICE_UNAVAILABLE <br />
       **Content:**<br/>
       `{ "status":"error", "message":"There was an internal file system error saving file.scpl." }`<br/>
       `{ "status":"error", "message":"File does not appear to exist." }`<br/>
       `{ "status":"error", "message":"You do not appear to own that file." }`<br/>
       `{ "status":"error", "message":"Invalid file ID." }`

* **Sample Call:**

```javascript
       $.ajax({
         url: "https://account.scpl.dev/api/v1/access",
         dataType: "json",
         type: "POST",
         date: {
            token: "AUTH_TOKEN",
            id: "FILE_ID",
            contents: "ShowResult 'Hello ScPL'"
         },
         success : function(r) {
           console.log(r);
         }
       });
```

   * **Notes:**

     _No notes._
