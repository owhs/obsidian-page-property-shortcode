import { Plugin, Editor } from 'obsidian';
import * as internal from 'obsidian-typings';


export default class OpenVSCode extends Plugin {

	async onload() {
		this.registerEvent(this.app.workspace.on("layout-change", this.replaceInProperties.bind(this)));
		this.registerEvent(this.app.workspace.on("active-leaf-change", this.replaceInProperties.bind(this)));
	}
	
	async replaceInProperties() {
		var timeout;
		clearTimeout(timeout);
		timeout=setTimeout(()=>{
			//var editor = this.app.workspace.activeEditor;
			var el = document.querySelector(".workspace-leaf.mod-active .markdown-reading-view") as HTMLElement;
			if (el!==null && el.style.display!=="none") {
				const els = document.querySelectorAll(".markdown-reading-view *");
				const textNodes = Array.combine(Array.from(els).map(el => Array.from(el.childNodes).filter(node => node.nodeType === Node.TEXT_NODE) ).filter(node => node.length>0));
				  
				  
				textNodes.forEach(n=>{
					var matches = (n.textContent || "").match(/\@[\w\/ \.]{1,}:[\w\-]{1,}/g);
					if (matches!==null){
						matches.forEach(async m=>{
							var query = m.split(":"), file = query[0].slice(1)+".md", res = await this.app.vault.readRaw(file).catch(()=>"");
							if(res.slice(0,3)==="---"){
								var properties = Object.assign.apply({},res.slice(4).split("---")[0].split("\n").filter(z=>z).map(z=>{var sp = z.split(": ");return {[sp[0]]:sp[1].trim()}})), value = properties[query[1]];
								if (value!==undefined) n.textContent = (n.textContent || "").replace(new RegExp(m,"g"),value);
							}
						});
					}
				});
			}
			//if (editor!==null && editor.getState().mode==="preview"){
				
			//}
		}, 50);
	}
}
