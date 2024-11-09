from django.contrib import admin
from .models import Produit

class ProduitAdmin(admin.ModelAdmin):
    list_display = ('nom_produit',
                    'description_produit',
                    'type_produit', 
                    'quantite_actuelle', 
                    'seuil_minimum')

# Register your models here.

admin.site.register(Produit, ProduitAdmin)