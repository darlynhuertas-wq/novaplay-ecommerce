from django.db.models import Count
from rest_framework import viewsets

from .models import Categoria, Producto
from .serializers import CategoriaSerializer, ProductoSerializer


class CategoriaViewSet(viewsets.ReadOnlyModelViewSet):
    """GET /api/categorias/  y  GET /api/categorias/<id>/"""

    serializer_class = CategoriaSerializer

    def get_queryset(self):
        return Categoria.objects.annotate(total_productos=Count("productos")).order_by("id")


class ProductoViewSet(viewsets.ReadOnlyModelViewSet):
    """GET /api/productos/  ·  GET /api/productos/?categoria=<id>  ·  GET /api/productos/<id>/"""

    serializer_class = ProductoSerializer

    def get_queryset(self):
        productos = Producto.objects.select_related("categoria").order_by("id")
        categoria = self.request.query_params.get("categoria")
        if categoria:
            productos = productos.filter(categoria_id=categoria)
        return productos