import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

// Variable DB
// Une base de données pour les oeuvres ajoutées et une pour les parcours
export const Oeuvres = new Mongo.Collection('oeuvres');
export const Parcours = new Mongo.Collection('parcours');

// Ecriture des méthodes
Meteor.methods({
    // Ce qui ajoute toutes les infos au moment où on confirme l'ajout d'une oeuvre sur la carte
    ajouterOeuvre: function(lat, lng, image) {
        let ajout = Oeuvres.insert({
                lat: lat,
                lng: lng,
                image: image,
        });
        console.log('success!');
        return ajout;
    },

    // Ajouter un parrcours à la base de données à partir du titre (que l'on doit encore travailler) et de l'id de l'oeuvre (crée automatiquement lors de l'ajout de l'oeuvre à la BD).
    ajouterParcours: function(titre, idList) {
        let ajout = Parcours.insert({
            titre: titre,
            idList: idList
        })
        console.log('success!');
        return ajout;
    },
})