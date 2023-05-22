import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import {
    webAdminCustomerCreateSchema,
    webAdminCustomerUpdateSchema,
    webAdminCustomerUploadSchema,
} from "@/presentation/validation/web-admin/customer-validation";
import { getDataTableScheme } from "@/presentation/validation/data-table-validation";
import { WebAdminCustomerService } from "@/services/web-admin/customer-service";
import { TYPES } from "@/types";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { z } from "zod";

@injectable()
export class WebAdminCustomerController {
    constructor(@inject(TYPES.WebAdminCustomerService) private _customerService: WebAdminCustomerService) {}
    public async store(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = webAdminCustomerCreateSchema.safeParse(req.body);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const created = await this._customerService.store(validatedReq.data);
        return res.json({
            message: "success",
            data: created,
        });
    }

    public async findAll(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = getDataTableScheme.safeParse(req.query);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Validation Failed",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const customers = await this._customerService.findAll(validatedReq.data);
        return res.json({
            message: "success",
            data: customers,
        });
    }

    public async findById(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = z
            .object({
                id: z.string(),
            })
            .safeParse(req.params);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Validation Failed",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const customer = await this._customerService.findById(validatedReq.data.id);
        return res.json({
            message: "success",
            data: customer,
        });
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const validatedReq = webAdminCustomerUpdateSchema.safeParse(req.body);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const customer = await this._customerService.update(req.params.id, req.body);
        return res.json({
            message: "success",
            data: customer,
        });
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const validatedReq = z
            .object({
                id: z.string(),
            })
            .safeParse(req.params);

        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        await this._customerService.destroy(validatedReq.data.id);
        return res.json({
            message: "Data Customer has been deleted",
        });
    }

    public async uploadSingle(req: Request, res: Response): Promise<Response> {
        const validatedReq = webAdminCustomerUploadSchema.safeParse({ file: req.file });
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const created = await this._customerService.uploadSingle(validatedReq.data.file);
        return res.json({
            message: "success",
            data: created,
        });
    }
}
