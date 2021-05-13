import './accueilLog.html';
import './accueilLog.css';
import '../../api/maps/maps-geoloc.js';


import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.accueilLog.helpers({
    utilisateur: () => Meteor.user().username,
})

Template.accueilLog.events({
    'click #profil'(event){
    event.preventDefault();
    FlowRouter.go('profil');
    },
    'click #ajouterOeuvre'(event){
    event.preventDefault();
    FlowRouter.go('ajouterOeuvre');
    }
})
