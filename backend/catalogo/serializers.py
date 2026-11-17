from rest_framework import serializers

from .models import Categoria, Producto


class CategoriaSerializer(serializers.ModelSerializer):
    total_productos = serializers.IntegerField(read_only=True)

    class Meta:
        model = Categoria
        fields = ["id", "nombre", "descripcion", "total_productos"]


class ProductoSerializer(serializers.ModelSerializer):
    # Además del id de la categoría, enviamos su nombre para mostrarlo en React
    categoria_nombre = serializers.CharField(source="categoria.nombre", read_only=True)

    class Meta:
        model = Producto
        fields = [
            "id",
            "nombre",
            "descripcion",
            "precio",
            "imagen",
            "stock",
            "categoria",
            "categoria_nombre",
            "destacado",
            "nuevo",
        ]