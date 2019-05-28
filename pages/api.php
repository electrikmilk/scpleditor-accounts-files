<h1>Files REST API Reference</h1>
<code><p><span style="color: #888;">https://</span>account.scpl.dev<span style="color: #555;">/api/v1/</span><b>{endpoint}</b></p></code>
<hr/>
<br/><p>JSON success/error reponse format:</p>
<code>{"status":"error|success","message":"details of error or success"}</code>
<br/><br/><hr/>

<div class="endpoint-item">
<div class="endpoint"><span>/</span>access</div>
<div class="endpoint-description">This is only a feature for the owner of the file. Send through a comma separated list of user ids to be set as collaborators on said file. Will only ever be files, never folders (for now). This will allow them to only open and save changes to the file.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li><br/>
    <li>users=[Comma separated list]</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>Success or error message</li>
  </ul>
</div>
</div>
<div class="endpoint-item">
  <div class="endpoint"><span>/</span>copy</div>
  <div class="endpoint-description">This is only a feature for the owner of the file or folder. Copy a file or folder set by 'item_id' to a folder set by 'folder_id'. Item ID can be the ID of a folder. If no folder ID is given, the file or folder is copied to the root of their files.</div>
  <div class="endpoint-method">Method: <span>POST</span></div>
  <div class="endpoint-params">
    <h4>URL Params</h4>
    <ul>
      <li>token=[alphanumeric]</li><br/>
      <li>item_id=[alphanumeric]</li><br/>
      <li>folder_id=[alphanumeric] (optional, if null set to root)</li>
    </ul>
  </div>
  <div class="endpoint-params">
    <h4>Response</h4>
    <ul>
      <li>Success or error message</li>
    </ul>
  </div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>create</div>
<div class="endpoint-description">Creates a physical file or folder in the users folder and a database record for that file or folder. Set type as file or folder. Contents is optional for files and will be ignored if you are creating a folder.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li><br/>
    <li>type=[file|folder]</li><br/>
    <li>name=[filename]</li><br/>
    <li>contents=[scpl] (optional)</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>id=[alphanumeric] (20 characters)</li><br/>
    <li>name=[filename] (special characters removed)</li>
  </ul>
</div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>delete</div>
<div class="endpoint-description">This is only a feature for the owner of the file. Delete a file specified by 'id', set type as file or folder.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li><br/>
    <li>type=[file|folder]</li><br/>
    <li>id=[alphanumeric]</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>Success or error message</li>
  </ul>
</div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>file</div>
<div class="endpoint-description">Get the contents of a file specified by 'id'. This feature is for the owner of a file or a set collaborator.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li><br/>
    <li>id=[alphanumeric]</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>contents=[scpl]</li>
  </ul>
</div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>fork</div>
<div class="endpoint-description">This is only a feature for a set collaborator of the file, the owner has no reason to do this. Fork a file shared with the current user, specified by 'id' to the root of their user folder.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li><br/>
    <li>id=[alphanumeric]</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>Success or error message</li>
  </ul>
</div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>list</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>List of current users files in JSON format.</li>
  </ul>
</div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>move</div>
<div class="endpoint-description">This is only a feature for the owner of the file or folder. Move a file or folder specified by 'item_id' to a folder set by 'folder_id'. Item ID can be the ID of a folder. If no folder ID is given, the file or folder is moved to the root of their files.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li><br/>
    <li>item_id=[alphanumeric]</li><br/>
    <li>folder_id=[alphanumeric] (optional, if null set to root)</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>Success or error message</li>
  </ul>
</div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>rename</div>
<div class="endpoint-description">This is only a feature for the owner of the file. Rename a file or folder specified by 'id'. 'name' is the new name of the file or folder.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li><br/>
    <li>id=[alphanumeric]</li><br/>
    <li>name=[New name to set]</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>Success or error message</li>
  </ul>
</div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>save</div>
<div class="endpoint-description">Save new contents for a file specified by 'id'. This feature is for the owner of a file or a set collaborator.</div>
  <div class="endpoint-method">Method: <span>POST</span></div>
  <div class="endpoint-params">
    <h4>URL Params</h4>
    <ul>
      <li>token=[alphanumeric]</li><br/>
      <li>id=[alphanumeric]</li><br/>
      <li>contents=[scpl]</li>
    </ul>
  </div>
  <div class="endpoint-params">
    <h4>Response</h4>
    <ul>
      <li>Success or error message</li>
    </ul>
  </div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>shared</div>
<div class="endpoint-description">Returns a JSON formatted list of files shared with the user. WIll only ever be files, never folders (for now).</div>
  <div class="endpoint-method">Method: <span>POST</span></div>
  <div class="endpoint-params">
    <h4>URL Params</h4>
    <ul>
      <li>token=[alphanumeric]</li>
    </ul>
  </div>
  <div class="endpoint-params">
    <h4>Response</h4>
    <ul>
      <li>List of files shared with the current user in JSON format.</li>
    </ul>
  </div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>token</div>
<div class="endpoint-description">Send 'key' supplied by 'login_key' from the accounts backend. Will return the actual token created when the user logged in that can be used to make requests to the Files REST API.</div>
  <div class="endpoint-method">Method: <span>POST</span></div>
  <div class="endpoint-params">
    <h4>URL Params</h4>
    <ul>
      <li>key=[integer]</li>
    </ul>
  </div>
  <div class="endpoint-params">
    <h4>Response</h4>
    <ul>
      <li>token=[alphanumeric] (10 characters)</li>
    </ul>
  </div>
</div>
