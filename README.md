# Rapid KL Real-Time Transit Intelligence System

## Unified Project Structure

- `app/api`: FastAPI entrypoint and endpoints (`/live-map`, `/health`, future `/forecast/{station_id}`).
- `app/services`: GTFS-Realtime ingestion loop, Redis caching, and geospatial nearest-station logic.
- `app/data_engine`: Polars LazyFrame feature engineering pipeline for OD ridership forecasting.
- `app/models`: Pydantic schemas for vehicle payloads.
- `app/frontend`: Reserved for Streamlit + PyDeck visualization.
- `tests`: test suites.

## Run Backend

```bash
uvicorn app.api.main:app --reload
```

The realtime ingestor starts on app startup and refreshes every 30 seconds.
