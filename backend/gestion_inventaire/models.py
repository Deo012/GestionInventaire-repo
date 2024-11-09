from django.db import models

# Create your models here.

class Produit(models.Model):
    nom_produit = models.CharField(max_length=120)
    description_produit = models.TextField()
    type_produit = models.CharField(max_length=120)
    quantite_actuelle = models.IntegerField()
    seuil_minimum = models.IntegerField()

    def _str_(self):
        return self.nom_produit