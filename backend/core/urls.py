from django.urls import path
from .views import PublicPortfolioListView, AdminPortfolioListView

urlpatterns = [
    path('portfolio/', PublicPortfolioListView.as_view(), name='public-portfolio'),
    path('admin/portfolio/', AdminPortfolioListView.as_view(), name='admin-portfolio'),
]
