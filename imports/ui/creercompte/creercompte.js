import './creercompte.html';
import './creercompte.css';
import '../stylesheet/signin-up.css';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import Swal from 'sweetalert2';

Template.register.events({
  'submit .form-signup': function (event) {
    event.preventDefault();
    var email = trimInput(event.target.email.value);
    var password = trimInput(event.target.password.value);
    var password2 = trimInput(event.target.password2.value);
    var first_name = trimInput(event.target.first_name.value);
    var last_name = trimInput(event.target.last_name.value);

    if (
      isNotEmpty(email) &&
      isNotEmpty(first_name) &&
      isNotEmpty(last_name) &&
      isEmail(email) &&
      areValidPasswords(password, password2)
    ) {
      Accounts.createUser(
        {
          email: email,
          password: password,
          profile: {
            first_name: first_name,
            last_name: last_name,
          },
        },
        function (err) {
          if (err) {
            Swal.fire('Error!', err.message, 'error');
          } else {
            Swal.fire('Success!', 'Le compte a été créé!', 'success');
            setTimeout(() => FlowRouter.go('accueilLog'), 200);
          }
        }
      );
    }

    //Prevent submit
    return false;
  },
});

// Validation rules

// Trim helper
var trimInput = function (val) {
  return val.replace(/ˆ\s*|\s*$/g, '');
};

//Check for empty fields
isNotEmpty = function (value) {
  if (value && value !== '') {
    return true;
  }
  Swal.fire('Error!', 'Merci de remplir tous les champs.', 'error');
  return false;
};

//Validate email
isEmail = function (value) {
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (filter.test(value)) {
    return true;
  }
  Swal.fire('Error!', 'Veuillez utiliser une adresse mail valide.', 'error');
  return false;
};

//Check Password Field
isValidPassword = function (password) {
  if (password.length < 11) {
    Swal.fire(
      'Error!',
      'Le mot de passe doit contenir au moins 11 caractères.',
      'error'
    );
    return false;
  }
  return true;
};

//Match Password
areValidPasswords = function (password, confirm) {
  if (!isValidPassword(password)) {
    return false;
  }
  if (password !== confirm) {
    Swal.fire('Error!', 'Les mots de passe ne correspondent pas.', 'error');
    return false;
  }
  return true;
};

Template.register.events({
  'click #retour'(event) {
    event.preventDefault();
    FlowRouter.go('connexion');
  },
});
