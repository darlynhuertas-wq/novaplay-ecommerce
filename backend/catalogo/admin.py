from django.contrib import admin

from .models import Categoria, Producto


class ProductoInline(admin.TabularInline):
    model = Producto
    fields = ("nombre", "precio", "stock")
    extra = 0


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("id", "nombre", "descripcion", "total_productos")
    search_fields = ("nombre",)
    inlines = [ProductoInline]

    @admin.display(description="N.° de productos")
    def total_productos(self, obj):
        return obj.productos.count()


@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ("id", "nombre", "categoria", "precio", "stock", "destacado", "nuevo")
    list_editable = ("precio", "stock", "destacado", "nuevo")
    list_filter = ("categoria", "destacado", "nuevo")
    search_fields = ("nombre", "descripcion")


admin.site.site_header = "NOVA PLAY · Administración"
admin.site.site_title = "NOVA PLAY"
admin.site.index_title = "Gestión del catálogo"