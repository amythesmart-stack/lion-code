import { HTMLAttributes } from "react"
import { useAppTranslation } from "@/i18n/TranslationContext"
import { VSCodeCheckbox, VSCodeTextField } from "@vscode/webview-ui-toolkit/react"

import { SetCachedStateField } from "./types"
import { SectionHeader } from "./SectionHeader"
import { Section } from "./Section"
import { SearchableSetting } from "./SearchableSetting"

type RemoteControlSettingsProps = HTMLAttributes<HTMLDivElement> & {
	remoteControlEnabled?: boolean
	remoteControlSocketPath?: string
	setCachedStateField: SetCachedStateField<"remoteControlEnabled" | "remoteControlSocketPath">
}

export const RemoteControlSettings = ({
	remoteControlEnabled,
	remoteControlSocketPath,
	setCachedStateField,
	...props
}: RemoteControlSettingsProps) => {
	const { t } = useAppTranslation()
	return (
		<div {...props}>
			<SectionHeader description={t("settings:remoteControl.description")}>
				{t("settings:sections.remoteControl")}
			</SectionHeader>

			<Section>
				<SearchableSetting
					settingId="remote-control-enabled"
					section="remoteControl"
					label={t("settings:remoteControl.enabled.label")}>
					<VSCodeCheckbox
						checked={remoteControlEnabled}
						onChange={(e: any) => setCachedStateField("remoteControlEnabled", e.target.checked)}
						data-testid="remote-control-enabled-checkbox">
						<span className="font-medium">{t("settings:remoteControl.enabled.label")}</span>
					</VSCodeCheckbox>
					<div className="text-vscode-descriptionForeground text-sm mt-1">
						{t("settings:remoteControl.enabled.description")}
					</div>
				</SearchableSetting>

				{remoteControlEnabled && (
					<div className="flex flex-col gap-3 pl-3 border-l-2 border-vscode-button-background">
						<SearchableSetting
							settingId="remote-control-socket-path"
							section="remoteControl"
							label={t("settings:remoteControl.socketPath.label")}>
							<label className="block font-medium mb-1">
								{t("settings:remoteControl.socketPath.label")}
							</label>
							<VSCodeTextField
								value={remoteControlSocketPath ?? ""}
								onInput={(e: any) =>
									setCachedStateField("remoteControlSocketPath", (e.target as HTMLInputElement).value)
								}
								placeholder={t("settings:remoteControl.socketPath.placeholder")}
								data-testid="remote-control-socket-path-input"></VSCodeTextField>
							<div className="text-vscode-descriptionForeground text-sm mt-1">
								{t("settings:remoteControl.socketPath.description")}
							</div>
						</SearchableSetting>
					</div>
				)}
			</Section>
		</div>
	)
}
