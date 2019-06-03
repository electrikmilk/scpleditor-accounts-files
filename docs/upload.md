**Create .shortcut file**
----
Create shortcut file on the server with binary shortcut data.

* **URL**

  /upload

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `filename=[string]`<br/>
   `data=[binary]`

* **Success Response:**

     * **Code:** 200 OK <br />
       **Content:** `{ "location":"https://account.scpl.dev/.../Example.shortcut" }`

* **Error Response:**

   * **Code:** 401 UNAUTHORIZED <br />
     **Content:**<br/>
     `{ "status":"error", "message":"No authentication token was received." }`<br/>
     `{ "status":"error", "message":"Invalid authentication token." }`

     OR

    * **Code:** 503 SERVICE UNAVAILABLE <br />
       **Content:**<br/>
       `{ "status":"error", "message":"No file data was received." }`<br/>
       `{ "status":"error", "message":"No filename was received." }`<br/>
       `{ "status":"error", "message":"Internal file system error creating shortcut file." }`

* **Sample Call:**

```javascript
      var blob = new Blob([file binary goes here], { type: "application/x-octet-stream" });
       $.ajax({
         url: "https://account.scpl.dev/api/v1/upload",
         dataType: "json",
         type: "POST",
         date: {
            filename: "Example",
            data: blob
         },
         success : function(r) {
           console.log(r);
         }
       });
```

   * **Notes:**

     _No notes._
