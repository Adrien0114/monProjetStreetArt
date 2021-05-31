import './body.html';
import './body.css';
import '../../api/maps/maps-geoloc.js';
import '../../../lib/routing.js';
import '../accueil/accueil.js';
import '../creercompte/creercompte.js';
import '../connexion/connexion.js';
import '../accueilLog/accueilLog.js';
import '../profil/profil.js';
import '../ajouterOeuvre/ajouterOeuvre.js';
import '../descriptif/descriptif.js';
import '../creerParcours/creerParcours.js';
import '../choisirParcours/choisirParcours.js';
import '../afficherParcours/afficherParcours.js';

import { Session } from 'meteor/session';

// Lors du clic sur le logo, toujours revenir à la bonne page précédente
Template.app_body.events({
  'click #cta'(event) {
    event.preventDefault();
    let routeActuelle = FlowRouter.getRouteName();
    if (routeActuelle == 'afficherParcours') {
      const param = FlowRouter.getParam('_parcoursId');
      routeActuelle = [routeActuelle, param];
    }
    Session.set('routeDOrigine', routeActuelle);
    console.log(Session.get('routeDOrigine'));
    FlowRouter.go('descriptif');
  },
});
