from django.db import models

class PortfolioProject(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.URLField(blank=True, null=True, help_text="External image link (e.g. Imgur) ya placeholder")
    project_link = models.URLField(blank=True, null=True)
    is_published = models.BooleanField(default=False, help_text="True = Public ko dikhega, False = Sirf Draft rahega")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({'Published' if self.is_published else 'Draft'})"

    class Meta:
        ordering = ['-created_at']
