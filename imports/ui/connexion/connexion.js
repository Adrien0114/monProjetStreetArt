import './connexion.html';
import './connexion.css'
import "../stylesheet/signin-up.css"

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import Swal from 'sweetalert2';

Template.login.events({
  "submit .form-signin": function(event){
    var email = event.target.email.value;
    var password = event.target.password.value;
    
    Meteor.loginWithPassword(email, password, function(err){
      if(err){
        event.target.email.value = email;
        event.target.password.value = password;
        Swal.fire('Error!',err.message,'error');
      } else {
        Swal.fire('Success!','Connexion réussie!','success');
        setTimeout(() => FlowRouter.go('accueilLog'), 200);
      }
    });
    
    //Prevent submit
    return false;
  }
});

Template.login.events({
  'click #retour'(event){
    event.preventDefault();
    FlowRouter.go('accueil');
  }
})
