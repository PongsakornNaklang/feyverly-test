import { Request, Response } from "express";

import Banner from "../model/banner";

export const getBanner = async (req: Request, res: Response) => {
    try {
        const banners = await Banner.findAll();
        res.json(banners);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

interface CustomResponse extends Response {
    banner?: any;
}

export const getBannerById = async (req: Request, res: CustomResponse, next: any) => {
    let banner;
    try {
        banner = await Banner.findOne({ where: { id: req.params.id } });
        if (banner == null) {
            return res.status(404).json({ message: "Cannot find banner" });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
    res.banner = banner;
    next();
}

export const createBanner = async (req: Request, res: Response) => {
    try {
        const banner = new Banner({
            title: req.body.title,
            image: req.body.image,
            link: req.body.link,
            status: req.body.status
        });
        const newBanner = await banner.save();
        res.status(201).json(newBanner);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export const updateBanner = async (req: Request, res: Response) => {
    try {
        const banner = await Banner.findOne({ where: { id: req.params.id } });
        if (!banner) {
            return res.status(404).json({ message: "Banner not found" });
        }
        banner.title = req.body.title;
        banner.image = req.body.image;
        banner.link = req.body.link;
        banner.status = req.body.status;
        const updatedBanner = await banner.save();
        res.json(updatedBanner);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteBanner = async (req: Request, res: Response) => {
    try {
        const banner = await Banner.findOne({ where: { id: req.params.id } });
        if (!banner) {
            return res.status(404).json({ message: "Banner not found" });
        }
        await banner.destroy();
        res.json({ message: "Banner deleted" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};