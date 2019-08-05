import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import lyrics from '~/assets/original-lyrics.json';
import newLyrics from '~/assets/new-lyrics.json';

Vue.use(Vuex);

const state = {
    lyric: [],
    newLyric: [],
};

const mutations = {
    displayLyric: (state, array) => {
        state.lyric = array;
    },

    displayNewLyric: (state, array) => {
        state.newLyric = array;
    },

    clearLyric: state => {
        state.lyric = '';
    },

    clearNewLyric: state => {
        state.newLyric = '';
    },
};

const actions = {
    getLyric({ commit }) {
        //find the beginning of a song by the '*' indicator
        var randomStart = [];
        for (var j = 0; j < lyrics.length; j++) {
            if (lyrics[j].lyric == '*') {
                //this is the position of all the stars
                randomStart.push(j);
            }
        }
        let random = Math.floor(Math.random() * randomStart.length);
        let r = randomStart[random];

        let lyricArray = [];
        //start at 1 so we don't have * in the array or the song title which is normally the first line here
        var i = 2;
        //var text = '';
        while (i <= 6) {
            lyricArray.push(lyrics[r + i].lyric);
            //some songs are short
            if (lyrics[r + 1].text != '*') {
                i++;
            }
        }
        commit('displayLyric', lyricArray);
    },

    getNewLyric({ commit }) {
        //find the beginning of a song by the '*' indicator
        var randomStart = [];
        for (var j = 0; j < newLyrics.length; j++) {
            if (newLyrics[j].lyric == '*') {
                //this is the position of all the stars
                randomStart.push(j);
            }
        }
        let random = Math.floor(Math.random() * randomStart.length);
        let r = randomStart[random] + 1;
        let lyricArray = [];

        for (var i = 0; i <= 10; i++) {
            if (newLyrics[r + i].lyric !== '*') {
                lyricArray.push(newLyrics[r + i].lyric);
            } else {
                break;
            }
        }

        commit('displayNewLyric', lyricArray);
    },

    clearLyric({ commit }) {
        commit('clearLyric');
    },

    clearNewLyric({ commit }) {
        commit('clearNewLyric');
    },
};

const storeConf = {
    state,
    mutations,
    actions,
};

export default new Vuex.Store(storeConf);
