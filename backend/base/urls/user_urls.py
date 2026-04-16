from django.urls import path
from base.views import user_views as views


urlpatterns = [
    # 1. Static + specific paths FIRST ✅
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.registerUser, name='register'),
    path('profile/', views.getUserProfile, name="users-profile"),
    path('profile/update/', views.updateUserProfile, name="user-profile-update"),

    # 2. Static + dynamic paths NEXT ✅
    path('delete/<str:pk>/', views.deleteUser, name='user-delete'),
    path('update/<str:pk>/', views.updateUser, name='user-update'),

    # 3. Pure dynamic path NEXT ✅
    path('<str:pk>/', views.getUserById, name='user'),

    # 4. ROOT EMPTY PATH LAST ✅
    path('', views.getUsers, name="users"),
]