import './descriptif.html';
import './descriptif.css';

import { Session } from 'meteor/session';

Template.descriptif.events({
    'click #retour'(event){
        event.preventDefault();
        const routeDOrigine = Session.get('routeDOrigine');
        // Si c'est une string on vient d'une route standard, si c'est un objet, on vient d'afficherParcours (avec Id).
        if (typeof routeDOrigine === "string") {
            FlowRouter.go(routeDOrigine);
        } else {
            FlowRouter.go(routeDOrigine[0], { "_parcoursId": routeDOrigine[1] })
        }
    }
})