**Import Shortcut from iCloud URL**
----
Upload shortcut to the server via an iCloud URL, returns path to uploaded shortcut.

* **URL**

  /import

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `url=[string]`

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
       `{ "status":"error", "message":"No URL was received." }`<br/>
       `{ "status":"error", "message":"Internal file system error creating shortcut file." }`

* **Sample Call:**

```javascript
       $.ajax({
         url: "https://account.scpl.dev/api/v1/import",
         dataType: "json",
         type: "POST",
         date: {
            url: "ICLOUD_URL"
         },
         success : function(r) {
           console.log(r);
         }
       });
```

   * **Notes:**

     _No notes._
