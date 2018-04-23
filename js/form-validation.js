 function _(id){ return document.getElementById(id);}
function submitForm(){
    _("submit").disabled = true;
    _("status").innerHTML = '<p>Please wait ...</p>';
    var formdata = new FormData();
    formdata.append("name", _("name").value);
    formdata.append("email", _("email").value);
    formdata.append("subject", _("subject").value);
    formdata.append("message", _("message").value);
    var ajax = new XMLHttpRequest();
    ajax.open("POST","inc/form-process.php");
    ajax.onreadystatechange = function(){

      if(ajax.readyState == 4 && ajax.status == 200)
      {

        if(ajax.responseText == "success")
        {
            
          _("status").innerHTML = '<h1>Thanks '+_("name").value+'</h1><p> Your message has been sent.</p>';
          contact_form.reset();
        }
        else
        {
          
           _("status").innerHTML = ajax.responseText;
           _("submit").disabled = false;
        }
      }
    }
    ajax.send( formdata );
}
