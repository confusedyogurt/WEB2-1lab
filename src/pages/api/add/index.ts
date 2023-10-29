import { PrismaClient, competition, Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {

    try {
        let { name, competitors, win, remi, defeat } = req.body
        const competition = await prisma.competition.create({
            data: {
                name: name,
                competitors: competitors,
                scoringsystem: win + "/" + remi + "/" + defeat,
            },
        })

        competitors = competitors.split(';');
        const competitorsSplitted: any = competitors.map((c: string) => c.trim());

        if (competitors.length == 4) {
            const round1 = await prisma.round.create({
                data: {
                    name: "Prvi Krug",
                    competitionId: competition.id
                },
            })

            const round2 = await prisma.round.create({
                data: {
                    name: "Drugi Krug",
                    competitionId: competition.id
                },
            })

            const round3 = await prisma.round.create({
                data: {
                    name: "Treći Krug",
                    competitionId: competition.id
                },
            })

            const matches = await prisma.match.createMany(
                {
                    data: [{
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[1],
                        result: "",
                        roundId: round1.id
                    },
                    {
                        firstplayer: competitorsSplitted[2],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round1.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[2],
                        result: "",
                        roundId: round2.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round2.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round3.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[2],
                        result: "",
                        roundId: round3.id
                    },
                    ],
                })
        }

        if (competitors.length == 5) {
            const round1 = await prisma.round.create({
                data: {
                    name: "Prvi Krug",
                    competitionId: competition.id
                },
            })

            const round2 = await prisma.round.create({
                data: {
                    name: "Drugi Krug",
                    competitionId: competition.id
                },
            })

            const round3 = await prisma.round.create({
                data: {
                    name: "Treći Krug",
                    competitionId: competition.id
                },
            })

            const round4 = await prisma.round.create({
                data: {
                    name: "Četvrti Krug",
                    competitionId: competition.id
                },
            })

            const matches = await prisma.match.createMany(
                {
                    data: [{
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[1],
                        result: "",
                        roundId: round1.id
                    },
                    {
                        firstplayer: competitorsSplitted[2],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round1.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[2],
                        result: "",
                        roundId: round2.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round2.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round3.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[4],
                        result: "",
                        roundId: round3.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[4],
                        result: "",
                        roundId: round4.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[2],
                        result: "",
                        roundId: round4.id
                    },
                    ],
                })
        }
        if (competitors.length == 6) {
            const round1 = await prisma.round.create({
                data: {
                    name: "Prvi Krug",
                    competitionId: competition.id
                },
            })

            const round2 = await prisma.round.create({
                data: {
                    name: "Drugi Krug",
                    competitionId: competition.id
                },
            })

            const round3 = await prisma.round.create({
                data: {
                    name: "Treći Krug",
                    competitionId: competition.id
                },
            })

            const round4 = await prisma.round.create({
                data: {
                    name: "Četvrti Krug",
                    competitionId: competition.id
                },
            })

            const round5 = await prisma.round.create({
                data: {
                    name: "Peti Krug",
                    competitionId: competition.id
                },
            })

            const matches = await prisma.match.createMany(
                {
                    data: [{
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[1],
                        result: "",
                        roundId: round1.id
                    },
                    {
                        firstplayer: competitorsSplitted[2],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round1.id
                    },
                    {
                        firstplayer: competitorsSplitted[4],
                        secondPlayer: competitorsSplitted[5],
                        result: "",
                        roundId: round1.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[2],
                        result: "",
                        roundId: round2.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round2.id
                    },
                    {
                        firstplayer: competitorsSplitted[4],
                        secondPlayer: competitorsSplitted[5],
                        result: "",
                        roundId: round2.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round3.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[4],
                        result: "",
                        roundId: round3.id
                    },
                    {
                        firstplayer: competitorsSplitted[2],
                        secondPlayer: competitorsSplitted[4],
                        result: "",
                        roundId: round3.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[4],
                        result: "",
                        roundId: round4.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[5],
                        result: "",
                        roundId: round4.id
                    },
                    {
                        firstplayer: competitorsSplitted[2],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round4.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[5],
                        result: "",
                        roundId: round5.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[2],
                        result: "",
                        roundId: round5.id
                    },
                    {
                        firstplayer: competitorsSplitted[3],
                        secondPlayer: competitorsSplitted[4],
                        result: "",
                        roundId: round5.id
                    },
                    ],
                })
        }
        if (competitors.length == 7) {
            const round1 = await prisma.round.create({
                data: {
                    name: "Prvi Krug",
                    competitionId: competition.id
                },
            })

            const round2 = await prisma.round.create({
                data: {
                    name: "Drugi Krug",
                    competitionId: competition.id
                },
            })

            const round3 = await prisma.round.create({
                data: {
                    name: "Treći Krug",
                    competitionId: competition.id
                },
            })

            const round4 = await prisma.round.create({
                data: {
                    name: "Četvrti Krug",
                    competitionId: competition.id
                },
            })

            const round5 = await prisma.round.create({
                data: {
                    name: "Peti Krug",
                    competitionId: competition.id
                },
            })

            const round6 = await prisma.round.create({
                data: {
                    name: "Šesti Krug",
                    competitionId: competition.id
                },
            })

            const matches = await prisma.match.createMany(
                {
                    data: [{
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[1],
                        result: "",
                        roundId: round1.id
                    },
                    {
                        firstplayer: competitorsSplitted[2],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round1.id
                    },
                    {
                        firstplayer: competitorsSplitted[4],
                        secondPlayer: competitorsSplitted[5],
                        result: "",
                        roundId: round1.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[2],
                        result: "",
                        roundId: round2.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round2.id
                    },
                    {
                        firstplayer: competitorsSplitted[4],
                        secondPlayer: competitorsSplitted[6],
                        result: "",
                        roundId: round2.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round3.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[4],
                        result: "",
                        roundId: round3.id
                    },
                    {
                        firstplayer: competitorsSplitted[2],
                        secondPlayer: competitorsSplitted[6],
                        result: "",
                        roundId: round3.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[4],
                        result: "",
                        roundId: round4.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[5],
                        result: "",
                        roundId: round4.id
                    },
                    {
                        firstplayer: competitorsSplitted[3],
                        secondPlayer: competitorsSplitted[6],
                        result: "",
                        roundId: round4.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[5],
                        result: "",
                        roundId: round5.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[6],
                        result: "",
                        roundId: round5.id
                    },
                    {
                        firstplayer: competitorsSplitted[2],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round5.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[6],
                        result: "",
                        roundId: round6.id
                    },
                    {
                        firstplayer: competitorsSplitted[2],
                        secondPlayer: competitorsSplitted[4],
                        result: "",
                        roundId: round6.id
                    },
                    ],
                })
        }
        if (competitors.length == 8) {
            const round1 = await prisma.round.create({
                data: {
                    name: "Prvi Krug",
                    competitionId: competition.id
                },
            })

            const round2 = await prisma.round.create({
                data: {
                    name: "Drugi Krug",
                    competitionId: competition.id
                },
            })

            const round3 = await prisma.round.create({
                data: {
                    name: "Treći Krug",
                    competitionId: competition.id
                },
            })

            const round4 = await prisma.round.create({
                data: {
                    name: "Četvrti Krug",
                    competitionId: competition.id
                },
            })

            const round5 = await prisma.round.create({
                data: {
                    name: "Peti Krug",
                    competitionId: competition.id
                },
            })

            const round6 = await prisma.round.create({
                data: {
                    name: "Šesti Krug",
                    competitionId: competition.id
                },
            })

            const round7 = await prisma.round.create({
                data: {
                    name: "Sedmi Krug",
                    competitionId: competition.id
                },
            })

            const round8 = await prisma.round.create({
                data: {
                    name: "Osmi Krug",
                    competitionId: competition.id
                },
            })

            const matches = await prisma.match.createMany(
                {
                    data: [{
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[1],
                        result: "",
                        roundId: round1.id
                    },
                    {
                        firstplayer: competitorsSplitted[2],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round1.id
                    },
                    {
                        firstplayer: competitorsSplitted[4],
                        secondPlayer: competitorsSplitted[5],
                        result: "",
                        roundId: round1.id
                    },
                    {
                        firstplayer: competitorsSplitted[6],
                        secondPlayer: competitorsSplitted[7],
                        result: "",
                        roundId: round1.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[2],
                        result: "",
                        roundId: round2.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round2.id
                    },
                    {
                        firstplayer: competitorsSplitted[4],
                        secondPlayer: competitorsSplitted[6],
                        result: "",
                        roundId: round2.id
                    },
                    {
                        firstplayer: competitorsSplitted[5],
                        secondPlayer: competitorsSplitted[7],
                        result: "",
                        roundId: round2.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round3.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[4],
                        result: "",
                        roundId: round3.id
                    },
                    {
                        firstplayer: competitorsSplitted[2],
                        secondPlayer: competitorsSplitted[7],
                        result: "",
                        roundId: round3.id
                    },
                    {
                        firstplayer: competitorsSplitted[5],
                        secondPlayer: competitorsSplitted[6],
                        result: "",
                        roundId: round3.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[4],
                        result: "",
                        roundId: round4.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[5],
                        result: "",
                        roundId: round4.id
                    },
                    {
                        firstplayer: competitorsSplitted[3],
                        secondPlayer: competitorsSplitted[7],
                        result: "",
                        roundId: round4.id
                    },
                    {
                        firstplayer: competitorsSplitted[2],
                        secondPlayer: competitorsSplitted[6],
                        result: "",
                        roundId: round4.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[5],
                        result: "",
                        roundId: round5.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[6],
                        result: "",
                        roundId: round5.id
                    },
                    {
                        firstplayer: competitorsSplitted[4],
                        secondPlayer: competitorsSplitted[6],
                        result: "",
                        roundId: round5.id
                    },
                    {
                        firstplayer: competitorsSplitted[3],
                        secondPlayer: competitorsSplitted[2],
                        result: "",
                        roundId: round5.id
                    },
                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[6],
                        result: "",
                        roundId: round6.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[7],
                        result: "",
                        roundId: round6.id
                    },
                    {
                        firstplayer: competitorsSplitted[5],
                        secondPlayer: competitorsSplitted[4],
                        result: "",
                        roundId: round6.id
                    },
                    {
                        firstplayer: competitorsSplitted[2],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round7.id
                    },

                    {
                        firstplayer: competitorsSplitted[0],
                        secondPlayer: competitorsSplitted[7],
                        result: "",
                        roundId: round7.id
                    },
                    {
                        firstplayer: competitorsSplitted[1],
                        secondPlayer: competitorsSplitted[6],
                        result: "",
                        roundId: round7.id
                    },
                    {
                        firstplayer: competitorsSplitted[5],
                        secondPlayer: competitorsSplitted[3],
                        result: "",
                        roundId: round7.id
                    },
                    {
                        firstplayer: competitorsSplitted[4],
                        secondPlayer: competitorsSplitted[2],
                        result: "",
                        roundId: round6.id
                    },

                    {
                        firstplayer: competitorsSplitted[2],
                        secondPlayer: competitorsSplitted[0],
                        result: "",
                        roundId: round8.id
                    },
                    {
                        firstplayer: competitorsSplitted[3],
                        secondPlayer: competitorsSplitted[1],
                        result: "",
                        roundId: round8.id
                    },
                    {
                        firstplayer: competitorsSplitted[4],
                        secondPlayer: competitorsSplitted[5],
                        result: "",
                        roundId: round8.id
                    },
                    {
                        firstplayer: competitorsSplitted[6],
                        secondPlayer: competitorsSplitted[7],
                        result: "",
                        roundId: round8.id
                    },
                    ],
                })
        }
        console.log(competition)
        return res.status(201).json(competition)
    }

    catch (error) {
        console.error("An error occurred:", error);
        return res.status(500).json({ error: "An error occurred." });
    }
}