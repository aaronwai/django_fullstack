from django.urls import path
from base.views import order_views as views

urlpatterns = [
    # 1. Static routes FIRST
    path('add/', views.addOrderItems, name='orders-add'),
    path("myorders/", views.getMyOrders, name="myorders"),

    # 2. Longer / specific dynamic routes NEXT
    path('<str:pk>/pay/', views.updateOrderToPaid, name='pay'),
    path('<str:pk>/deliver/', views.updateOrderToDelivered, name='order-delivered'),
    # 3. Short dynamic route LAST (before root)
    path('<str:pk>/', views.getOrderById, name='user-order'),

    # 4. Root empty route AT THE END
    path('', views.getOrders, name='orders'),
]