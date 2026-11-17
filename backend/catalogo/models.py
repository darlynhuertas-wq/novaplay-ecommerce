from django.db import models


class Categoria(models.Model):
    nombre = models.CharField(max_length=60, unique=True)
    descripcion = models.CharField(max_length=200, blank=True)

    class Meta:
        verbose_name = "categoría"
        verbose_name_plural = "categorías"
        ordering = ["id"]

    def __str__(self):
        return self.nombre


class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField("descripción")
    precio = models.DecimalField(max_digits=8, decimal_places=2)
    imagen = models.URLField("imagen (URL)", blank=True)
    stock = models.PositiveIntegerField("cantidad disponible", default=0)
    # Relación uno a muchos: una categoría tiene muchos productos
    categoria = models.ForeignKey(
        Categoria,
        on_delete=models.PROTECT,
        related_name="productos",
        verbose_name="categoría",
    )
    destacado = models.BooleanField(default=False)
    nuevo = models.BooleanField(default=False)
    creado = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "producto"
        verbose_name_plural = "productos"
        ordering = ["id"]

    def __str__(self):
        return f"{self.nombre} (S/ {self.precio})"