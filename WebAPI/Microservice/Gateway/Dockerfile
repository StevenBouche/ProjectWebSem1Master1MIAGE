#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 7000
EXPOSE 7001

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["GatewayRestaurant/GatewayRestaurant.csproj", "GatewayRestaurant/"]
RUN dotnet restore "GatewayRestaurant/GatewayRestaurant.csproj"
COPY . .
WORKDIR "/src/GatewayRestaurant"
RUN dotnet build "GatewayRestaurant.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "GatewayRestaurant.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GatewayRestaurant.dll"]