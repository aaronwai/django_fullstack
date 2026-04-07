from django.apps import AppConfig


class BaseConfig(AppConfig):
    name = 'base'
    def ready(self):
        import base.signals
        return super().ready()
