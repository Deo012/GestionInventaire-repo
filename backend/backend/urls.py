from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from gestion_inventaire import views

router = routers.DefaultRouter()
router.register(r'produits', views.ProduitView, 'produit')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]