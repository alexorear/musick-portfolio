/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
	id: string;
}

interface PortfolioExample {
	id: number;
	category: string;
	title: string;
	description: string;
	primaryUrl: string;
	primaryThumbUrl: string;
}
