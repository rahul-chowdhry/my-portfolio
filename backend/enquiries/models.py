from django.db import models

class Enquiry(models.Model):
    STATUS_CHOICES = [
        ('New', 'New'),
        ('In Review', 'In Review'),
        ('In Progress', 'In Progress'),
        ('Completed', 'Completed'),
        ('Closed', 'Closed'),
    ]

    name = models.CharField(max_length=255)
    email = models.EmailField()
    service_category = models.CharField(max_length=255)
    budget = models.CharField(max_length=100, blank=True, null=True)
    timeline = models.CharField(max_length=100, blank=True, null=True)
    message = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='New')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.service_category} ({self.status})"

    class Meta:
        verbose_name_plural = 'Enquiries'
        ordering = ['-created_at']
