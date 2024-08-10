import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const PopularVideoLimit = 10;

export const creatorRouter = createTRPCRouter({
  getCreator: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
    const creator = await ctx.db.debugMastery_Creator.findFirst({
      where: {
        id: input,
      },
      include: {
        DebugMastery_Videos: {
          select: {
            title: true,
            thumbnail: true,
          },
          take: PopularVideoLimit,
        },
      },
    });

    if (!creator)
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "No creator with specified ID found.",
      });

    return creator;
  }),

  getCreatorVideos: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
    const creatorVideos = await ctx.db.debugMastery_Videos.findMany({
      where: {
        debugMastery_CreatorId: input,
      },
      select: {
        id: true,
        title: true,
        thumbnail: true,
      },
      take: PopularVideoLimit,
    });

    if (!creatorVideos)
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "No creator videos with specified ID found.",
      });

    return creatorVideos;
  }),
});
