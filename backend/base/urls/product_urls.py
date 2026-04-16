from django.urls import path
from base.views import product_views as views

urlpatterns = [
    # 1. STATIC ROUTES FIRST
    path('create/', views.createProduct, name="product-create"),
    path('upload/', views.uploadImage, name="image-upload"),
     path('top/', views.getTopProducts, name='top-products'),
    # 2. STATIC + DYNAMIC COMBOS (update / delete)
    path('update/<str:pk>/', views.updateProduct, name="product-update"),
    path('delete/<str:pk>/', views.deleteProduct, name="product-delete"),
    path('<str:pk>/reviews/', views.createProductReview, name="create-review"),
    # 3. ONLY DYNAMIC (single product)
    path('<str:pk>/', views.getProduct, name="product"),
    
    # 4. ROOT '' COMES DEAD LAST
    path('', views.getProducts, name="products"),
]