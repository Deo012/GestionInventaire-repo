from rest_framework import serializers
from .models import Produit

class ProduitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produit
        fields = (  'nom_produit',
                    'description_produit',
                    'type_produit', 
                    'quantite_actuelle', 
                    'seuil_minimum')
