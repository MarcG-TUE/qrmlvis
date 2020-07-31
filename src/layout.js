
export default class Layout {

    getParent(comp){
        const i = comp.lastIndexOf(".")
        if (i==-1) {return null}
        return comp.substr(0, i)
    }

    getHierarchy(layout) {
        var childMap = {}
        for (const comp in layout) {
            const parent = this.getParent(comp)
            if (parent) {
                if (! (parent in childMap)) {
                    childMap[parent] = []
                }
                childMap[parent].push(comp)
            }
        }
        var result = {}
        for (const comp in childMap) {
            if (childMap[comp].length > 0) {
                result[comp] = childMap[comp].filter(c => c in childMap)
            }
        }
        return result
    }

    autoLayout(layout) {
        var newLayout = Object.assign({}, layout)
        const hierarchy = this.getHierarchy(newLayout)
        this._autoLayout(newLayout, hierarchy, "root", 10, 10, 500, 300, true)
        return newLayout
    }


    _autoLayout(layout, hierarchy, comp, x, y, width, height, horizontal) {
        if (comp in layout) {
            layout[comp] = { 
                x: x,
                y: y,
                width: width,
                height: height,
                relative: false,
            }
        }
        if (! (comp in hierarchy)) return
        const N = hierarchy[comp].length
        if (N == 0) return
        // divide height/width over N components plus N-1 times 1/4 
        // border percentage
        const border = 0.1
        const space = (1.0-2*border) * (horizontal ? width : height)
        const unitSize = space / (5*N-1)
        const nWidth = horizontal ? space/((5*N-1)/4.0) : width*(1.0-2.0*border)
        const nHeight = horizontal ? height*(1.0-2.0*border) : space/((5*N-1)/4.0)
        for (var i=0; i<N; i++) {
            const nx = width*border  + (horizontal ? (5*i)*unitSize : 0)
            const ny = height*border + (horizontal ? 0 : (5*i)*unitSize)
            this._autoLayout(layout, hierarchy, hierarchy[comp][i], nx, ny, nWidth, nHeight, ! horizontal)
        }
    }

}



