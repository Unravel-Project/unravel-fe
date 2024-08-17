interface UnravelTeam {
    name?: string;
    socialMedia?: {
        instagram?: string,
        github?: string,
        linkedin?: string,
        website?: string,
    };
    image?: string;
}

interface Contributors {
    department: string;
    contributors: UnravelTeam[];
}