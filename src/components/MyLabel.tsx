import  "./mylabel.css";

export interface MyLabelProps {
    /**
     * Texto que debe mostrar el label
     */
    label:string,
    /**
     * Tamaño que va tener la etiqueta
     */    
    size: "normal"|"h1"|"h2"|"h3",
    /**
     * Convierte el texto en mayusculas
     */  
    allcaps?:boolean
    /**
     * Colores basicos del Label
     */  
    color:'primary'|'secondary'|'tertiary'
    /**
     * Color personalizado de la fuente
     */  
     fontColor?: string

}

export const MyLabel = ({   label = 'No label', size = 'normal', 
                            allcaps= false, color='primary', 
                            fontColor }:MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color} `}
            style={{color:fontColor}}
            >
        { allcaps?  label.toUpperCase():label }
    </span>
  )
}
