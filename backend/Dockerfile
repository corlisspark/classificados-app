FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /app

# Copy csproj and restore dependencies
COPY ClassifiedsAPI/ClassifiedsAPI/*.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY ClassifiedsAPI/ClassifiedsAPI/ ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build /app/out .

# Expose port
EXPOSE 80
ENV ASPNETCORE_URLS=http://*:80

ENTRYPOINT ["dotnet", "ClassifiedsAPI.dll"]