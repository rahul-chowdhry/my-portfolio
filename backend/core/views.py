from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import PortfolioProject
from .serializers import PortfolioProjectSerializer

# Public API - Sirf wahi projects dikhayega jo 'is_published=True' hain
class PublicPortfolioListView(generics.ListAPIView):
    queryset = PortfolioProject.objects.filter(is_published=True).order_by('-created_at')
    serializer_class = PortfolioProjectSerializer
    permission_classes = []

# Admin API - Saare projects dikhayega (Drafts bhi) aur naye add karne dega
class AdminPortfolioListView(generics.ListCreateAPIView):
    queryset = PortfolioProject.objects.all().order_by('-created_at')
    serializer_class = PortfolioProjectSerializer
    permission_classes = [IsAuthenticated]
