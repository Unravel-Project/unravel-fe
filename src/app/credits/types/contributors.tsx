interface UnravelTeam {
    name: string;
    socialMedia?: string[];
}

interface Contributors {
    department: string;
    contributors: UnravelTeam[];
}