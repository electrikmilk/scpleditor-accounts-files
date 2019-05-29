**Copy File or Folder**
----
Copy a file or folder set by 'item_id' to a folder set by 'folder_id'. If no 'folder_id' is given, the file or folder is copied to the root of their files. This endpoint is restricted to the owner of the file or folder.

* **URL**

  /copy

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`
   `item_id=[alphanumeric]`

   **Optional:**

   `folder_id=[alphanumeric]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._>

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._>
