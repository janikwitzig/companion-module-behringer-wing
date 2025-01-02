// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace BusCommands {
	export function Node(bus: number): string {
		return `/bus/${bus}`
	}
	
	export function InputNode(bus: number): string {
		return `${Node(bus)}/in`
	}
	
	export function InputSetNode(bus: number): string {
		return `${InputNode(bus)}/set`
	}

	export function InputInvert(bus: number): string {
		return `${InputSetNode(bus)}/inv`
	}

	export function InputTrim(bus: number): string {
		return `${InputSetNode(bus)}/trim`
	}

	export function InputBalance(bus: number): string {
		return `${InputSetNode(bus)}/bal`
	}

	export function Color(bus: number): string {
		return `${Node(bus)}/col`
	}

	export function Name(bus: number): string {
		return `${Node(bus)}/name`
	}

	export function Icon(bus: number): string {
		return `${Node(bus)}/icon`
	}

	export function ScribbleLight(bus: number): string {
		return `${Node(bus)}/led`
	}

	export function MonoSwitch(bus: number): string {
		return `${Node(bus)}/busmono`
	}

	export function Mute(bus: number): string {
		return `${Node(bus)}/mute`
	}

	export function Fader(bus: number): string {
		return `${Node(bus)}/fdr`
	}

	export function Pan(bus: number): string {
		return `${Node(bus)}/pan`
	}

	export function Width(bus: number): string {
		return `${Node(bus)}/wid`
	}

	export function Solo(bus: number): string {
		return `${Node(bus)}/$solo`
	}

	export function SoloLed(bus: number): string {
		return `${Node(bus)}/$sololed`
	}

	export function MonitorMode(bus: number): string {
		return `${Node(bus)}/mon`
	}

	export function Mode(bus: number): string {
		return `${Node(bus)}/busmode`
	}

	export function SendNode(bus: number, send: number): string {
		return `${Node(bus)}/send/${send}`
	}

	export function SendOn(bus: number, send: number): string {
		return `${SendNode(bus, send)}/on`
	}

	export function SendLevel(bus: number, send: number): string {
		return `${SendNode(bus, send)}/lvl`
	}
}