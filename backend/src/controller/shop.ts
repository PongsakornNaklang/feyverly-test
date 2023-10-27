
import { Request, Response } from "express";

import Shop from "../model/shop";

export const getShop = async (req: Request, res: Response) => {
    try {
        const shops = await Shop.findAll();
        res.json(shops);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const getShopById = async (req: Request, res: Response) => {
    try {
        const shop = await Shop.findOne({ where: { id: req.params.id } });
        if (!shop) {
            return res.status(404).json({ message: "Cannot find shop" });
        }
        res.json(shop);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const createShop = (req: Request, res: Response) => {
    try {
        const shop = new Shop({
            name: req.body.name,
            lat: req.body.lat,
            lng: req.body.lng,
        });
        const newShop = shop.save();
        res.status(201).json(newShop);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export const updateShop = async (req: Request, res: Response) => {
    try {
        const shop = await Shop.findOne({ where: { id: req.params.id } });
        if (!shop) {
            return res.status(404).json({ message: "Shop not found" });
        }
        shop.name = req.body.name;
        shop.lat = req.body.lat;
        shop.lng = req.body.lng;
        const updatedShop = shop.save();
        res.json(updatedShop);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteShop = async (req: Request, res: Response) => {
    try {
        const shop = await Shop.findOne({ where: { id: req.params.id } });
        if (!shop) {
            return res.status(404).json({ message: "Shop not found" });
        }
        shop.destroy();
        res.json({ message: "Shop deleted" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}